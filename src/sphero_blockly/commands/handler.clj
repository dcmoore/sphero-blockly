(ns sphero-blockly.commands.handler
  (:require [clojure.java.io :as io]
            [compojure.core :refer :all]
            [compojure.route :as route]))

(defroutes command-handler
  (GET "/" [] "hello")
  (route/not-found "Not Found"))
