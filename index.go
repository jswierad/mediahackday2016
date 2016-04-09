package main

import (
	"github.com/gorilla/mux"
	//"html/template"
	"net/http"
	"os"
)

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
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/swipeout/{user_id:[0-9+]/{ad_id:[a-zA-Z0-9+]}", SwipeOut).Methods("GET")
	http.ListenAndServe(":8000", nil)
}
