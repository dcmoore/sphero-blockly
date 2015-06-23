(ns sphero-blockly.handler
  (:require [clojure.java.io :as io]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [sphero-blockly.commands.handler :refer [command-handler]]))

(defroutes app-handler
  (GET "/" [] (slurp (io/resource "public/index.html")))
  (context "/command" [] command-handler)
  (route/not-found "Not Found"))

(def app
  (-> app-handler
    (wrap-defaults site-defaults)))
