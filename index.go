// API server providing endpoints for AdSparency; Designed for Media Hack Day 2016, Berlin
package main

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
	"log"
	"net/http"
	"strings"
)

var db *sqlx.DB

// /monitor [GET] - endpoint for ELB to perform healthchecks
func Monitor(w http.ResponseWriter, req *http.Request) {
}

// /store_tags [POST] ["tag1", "tag2", "tag3"...]
func StoreTags(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	var tags []string
	decoder := json.NewDecoder(req.Body)
	err := decoder.Decode(&tags)
	chkErr(err)
	log.Println(tags)
	tags_str := strings.Join(tags, ",")
	log.Println(tags_str)
	_, err = db.Exec("UPDATE tags SET tags = ?", tags_str)
	chkErr(err)
}

// /swipeout/user_id/ad_id [GET] - blacklist ad_id for user_id
func SwipeOut(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	params := mux.Vars(req)
	user_id := params["user_id"]
	ad_id := params["ad_id"]
	_, err := db.Exec("INSERT INTO blocked_ads (user_id, ad_id) values (?, ?)", user_id, ad_id)
	chkErr(err)
}

// /get_tags [GET] - returns list of tags as Json ["tag1","tag2","tag3"...]
func GetTags(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	var tags []string
	var tags_str string

	db.Get(&tags_str, "SELECT tags FROM tags")

	tags = strings.Split(tags_str, ",")
	encoder := json.NewEncoder(w)
	encoder.Encode(tags)
}

// /blocked_ads/user_id [GET] - returns list of blocked ad_ids as Json ["id1", "id2"...]
func BlockedAds(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	params := mux.Vars(req)
	user_id := params["user_id"]

	rows, err := db.Query("SELECT DISTINCT ad_id FROM blocked_ads WHERE user_id = ?", user_id)
	chkErr(err)
	var ads []string

	for rows.Next() {
		var ad_id string
		err = rows.Scan(&ad_id)
		ads = append(ads, ad_id)
	}

	chkErr(err)
	encoder := json.NewEncoder(w)
	encoder.Encode(ads)
}

func main() {

	var err error
	db, err = sqlx.Open("sqlite3", "./foo.db")
	chkErr(err)

	err = db.Ping()
	chkErr(err)

	router := mux.NewRouter()
	router.HandleFunc("/monitor", Monitor).Methods("GET")
	router.HandleFunc("/store_tags", StoreTags).Methods("POST")
	router.HandleFunc("/get_tags", GetTags).Methods("GET")
	router.HandleFunc("/swipeout/{user_id:[0-9]+}/{ad_id:[a-zA-Z0-9]+}", SwipeOut).Methods("GET")
	router.HandleFunc("/blocked_ads/{user_id:[0-9]+}", BlockedAds).Methods("GET")

	http.ListenAndServe(":8000", router)
}

func chkErr(err error) {
	if err != nil {
		log.Println("Error:", err)
	}
}
