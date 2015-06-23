(ns sphero-blockly.handler
  (:require [clojure.java.io :as io]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(defroutes app-routes
  (GET "/" [] (slurp (io/resource "public/index.html")))
  (route/not-found "Not Found"))

(def app
  (-> app-routes
    (wrap-defaults site-defaults)))
