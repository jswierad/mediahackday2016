// API server providing endpoints for AdSparency; Designed for Media Hack Day 2016, Berlin
package main

import (
	"github.com/gorilla/mux"
	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
	"log"
	"net/http"
	"sanoma.com/mediahackday2016/api"
)

func main() {

	db, err := sqlx.Open("sqlite3", "./foo.db")
	api.Db = db
	chkErr(err)

	err = db.Ping()
	chkErr(err)

	router := mux.NewRouter()
	router.HandleFunc("/monitor", api.Monitor).Methods("GET")
	router.HandleFunc("/delete_all", api.DeleteAll).Methods("GET")
	router.HandleFunc("/store_tags", api.StoreTags).Methods("POST")
	router.HandleFunc("/get_tags", api.GetTags).Methods("GET")
	router.HandleFunc("/swipeout/{user_id:[0-9]+}/{ad_id:[a-zA-Z0-9]+}", api.SwipeOut).Methods("GET")
	router.HandleFunc("/click/{user_id:[0-9]+}/{ad_id:[a-zA-Z0-9]+}", api.AdClicked).Methods("GET")
	router.HandleFunc("/blocked_ads/{user_id:[0-9]+}", api.BlockedAds).Methods("GET")
	router.HandleFunc("/clicked_ads/{user_id:[0-9]+}", api.ClickedAds).Methods("GET")

	http.ListenAndServe(":8000", router)
}

func chkErr(err error) {
	if err != nil {
		log.Println("Error:", err)
	}
}
