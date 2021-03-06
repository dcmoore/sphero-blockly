(defproject sphero-blockly "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.3.1"]
                 [ellipso "0.1.2-SNAPSHOT"]
                 [javax.servlet/servlet-api "2.5"]
                 [ring/ring-jetty-adapter "1.2.0"]
                 [ring/ring-defaults "0.1.2"]]
  :plugins [[lein-ring "0.8.13"]]
  :alias {"test" ["with-profile" "test" "test"]}
  :main sphero-blockly.main
  :uberjar {:aot :all}
  :profiles {:test {:dependencies [[ring-mock "0.1.5"]]}})
