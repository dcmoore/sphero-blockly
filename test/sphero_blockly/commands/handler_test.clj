(ns sphero-blockly.commands.handler-test
  (:require [clojure.java.io :as io]
            [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [sphero-blockly.commands.handler :refer :all]))

(deftest test-app
  (testing "main route"
    (let [response (command-handler (mock/request :get "/"))]
      (is (= (:status response) 200))
      (is (= (:body response) "hello")))))
