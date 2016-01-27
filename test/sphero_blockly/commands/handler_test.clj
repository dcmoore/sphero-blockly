(ns sphero-blockly.commands.handler-test
  (:require [clojure.java.io :as io]
            [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [sphero-blockly.commands.executer :refer [move-direction]]
            [sphero-blockly.commands.handler :refer :all]
            [sphero-blockly.test-helper :refer [mock-fn]]))

(def move-direction-invocations (atom []))
(defmacro with-setup-testing [docstring test-body]
  `(reset! move-direction-invocations [])
  `(with-redefs [move-direction (mock-fn move-direction-invocations "{}")]
    (testing `docstring `test-body)))

(deftest test-app
  (with-setup-testing "forward"
    (let [response (command-handler (assoc (mock/request :get "/forward") :params {:speed "1" :distance "2"}))]
      (is (= (:status response) 200))
      (is (= @move-direction-invocations [[:forward "1" "2"]]))))

  (with-setup-testing "reverse"
    (let [response (command-handler (assoc (mock/request :get "/reverse") :params {:speed "5040" :distance "23"}))]
      (is (= (:status response) 200))
      (is (= @move-direction-invocations [[:reverse "5040" "23"]]))))

  (with-setup-testing "left"
    (let [response (command-handler (assoc (mock/request :get "/left") :params {:speed "11" :distance "7"}))]
      (is (= (:status response) 200))
      (is (= @move-direction-invocations [[:left "11" "7"]]))))

  (with-setup-testing "right"
    (let [response (command-handler (assoc (mock/request :get "/right") :params {:speed "5318008" :distance "07734"}))]
      (is (= (:status response) 200))
      (is (= @move-direction-invocations [[:right "5318008" "07734"]])))))
