(ns sphero-blockly.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.resource :refer [wrap-resource]]))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (route/not-found "Not Found"))

(def app
  (-> app-routes
    (wrap-defaults site-defaults)
    (wrap-resource "public")))
