(ns sphero-blockly.commands.handler-test
  (:require [clojure.java.io :as io]
            [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [sphero-blockly.commands.executer :refer [move-direction reset-heading]]
            [sphero-blockly.commands.handler :refer :all]
            [sphero-blockly.test-helper :refer [check-if-invoked-fn record-invocations-fn]]))

(def move-direction-invocations (atom []))
(defmacro testing-with-mock-move-direction [docstring test-body]
  `(reset! move-direction-invocations [])
  `(with-redefs [move-direction (record-invocations-fn move-direction-invocations)]
    (testing `docstring `test-body)))

(deftest test-maps-requests-to-the-correct-command
  (testing-with-mock-move-direction "forward command"
    (let [response (command-handler (assoc (mock/request :get "/forward") :params {:speed "1" :distance "2"}))]
      (is (= (:status response) 200))
      (is (= @move-direction-invocations [[:forward "1" "2"]]))))

  (testing-with-mock-move-direction "reverse command"
    (let [response (command-handler (assoc (mock/request :get "/reverse") :params {:speed "5040" :distance "23"}))]
      (is (= (:status response) 200))
      (is (= @move-direction-invocations [[:reverse "5040" "23"]]))))

  (testing-with-mock-move-direction "left command"
    (let [response (command-handler (assoc (mock/request :get "/left") :params {:speed "11" :distance "7"}))]
      (is (= (:status response) 200))
      (is (= @move-direction-invocations [[:left "11" "7"]]))))

  (testing-with-mock-move-direction "right command"
    (let [response (command-handler (assoc (mock/request :get "/right") :params {:speed "5318008" :distance "07734"}))]
      (is (= (:status response) 200))
      (is (= @move-direction-invocations [[:right "5318008" "07734"]]))))

  (testing "reset-heading command"
    (let [called-reset-heading? (atom false)]
      (with-redefs [reset-heading (check-if-invoked-fn called-reset-heading?)]
        (let [response (command-handler (mock/request :get "/reset-heading"))]
          (is (= (:status response) 200))
          (is @called-reset-heading?))))))
