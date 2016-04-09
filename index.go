package main

import (
	"encoding/json"
	"github.com/gorilla/mux"
	//"html/template"
	"net/http"
	//	"os"
	//"database/sql"
	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
	"log"
)

var db *sqlx.DB

/*
type Content struct {
	Hostname string
}

func hello(w http.ResponseWriter, r *http.Request) {

	t, _ := template.ParseFiles("tmpl/welcome.html")
	c := Content{}
	c.Hostname, _ = os.Hostname()
	t.Execute(w, c)

} */

func SwipeOut(w http.ResponseWriter, req *http.Request) {
	params := mux.Vars(req)
	user_id := params["user_id"]
	ad_id := params["ad_id"]
	_, err := db.Exec("INSERT INTO blocked_ads (user_id, ad_id) values (?, ?)", user_id, ad_id)
	chkErr(err)
}

func BlockedAds(w http.ResponseWriter, req *http.Request) {

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
	router.HandleFunc("/swipeout/{user_id:[0-9]+}/{ad_id:[a-zA-Z0-9]+}", SwipeOut).Methods("GET")
	router.HandleFunc("/blocked_ads/{user_id:[0-9]+}", BlockedAds).Methods("GET")

	http.ListenAndServe(":8000", router)
}

func chkErr(err error) {
	if err != nil {
		log.Println("Error:", err)
	}
}
