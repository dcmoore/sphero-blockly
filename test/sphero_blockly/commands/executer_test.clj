(ns sphero-blockly.commands.executer-test
  (:require [clojure.test :refer :all]
            [ellipso.commands :as commands]
            [sphero-blockly.commands.executer :refer [
               calculate-distance calculate-speed
               numeric-direction move-direction roll
               adjust-distance-for-direction direction-offset]]))

(def roll-executions (atom []))
(def command-executions (atom []))
(def command-roll-executions (atom []))

(defn capture-roll-execution [speed direction distance]
  (swap! roll-executions conj { :speed speed :direction direction :distance distance }))

(defn capture-command-execution [sphero command]
  (swap! command-executions conj { :sphero sphero :command command }))

(defn capture-command-roll-executions [speed direction]
  (let [command { :speed speed :direction direction }]
    (swap! command-roll-executions conj command)
    command))

(deftest calculates-correct-numeric-direction
  (testing "forward"
    (is (= (numeric-direction :forward) 0)))
  (testing "right"
    (is (= (numeric-direction :right) 90)))
  (testing "reverse"
    (is (= (numeric-direction :reverse) 180)))
  (testing "left"
    (is (= (numeric-direction :left) 270))))

(deftest calculates-correct-distance-based-on-input
  (testing "multiplies user input by 1000"
    (is (= (calculate-distance 0) 0))
    (is (= (calculate-distance 1) 1000))
    (is (= (calculate-distance 10) 10000)))
  (testing "caps user distance to 10"
    (let [user-input 15]
      (is (= (calculate-distance user-input) 10000)))))

(deftest adjusts-distance-for-direction
  (testing "adjusts distance based on given direction"
    (is (= (adjust-distance-for-direction 5000 :forward) 5000))
    (is (= (adjust-distance-for-direction 5000 :reverse) 5150))
    (is (= (adjust-distance-for-direction 5000 :left) 5150))
    (is (= (adjust-distance-for-direction 5000 :right) 5150))))

(deftest calculates-correct-speed-based-on-input
  (testing "calculates the correct speed"
    (is (= (calculate-speed 1) 2)))
  (testing "caps speed to 255"
    (is (= (calculate-speed 101) 255))))

(deftest executes-move-command
  (testing "tells sphero to move with calculated values"
    (with-redefs [roll capture-roll-execution]
      (move-direction :forward 100 10)
      (is (= { :speed 254 :direction 0 :distance 10000 }
             (first @roll-executions))))))

(deftest tells-the-sphero-to-move
  (testing "tells sphere to move with calculated values"
    (with-redefs [commands/execute capture-command-execution
                  commands/roll    capture-command-roll-executions]
      (move-direction :forward 100 10)
      (is (= { :sphero nil :command { :speed 254 :direction 0} }
             (first @command-executions))))))

