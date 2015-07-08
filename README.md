mushlee.github.io
-----------------

Website of Mushlee.

* http://mushlee.com/
* https://mushlee.github.io/

DNS
---

* TTL 60 -> 3600

```
$ dig mushlee.com

;; ANSWER SECTION:
mushlee.com.		62	IN	A	192.30.252.153
mushlee.com.		62	IN	A	192.30.252.154

```

Getting Started
---------------

* `gem install bundler`
* `gem install middleman`
* `git clone https://github.com/mushlee/mushlee.github.io.git`
* `middleman s`
* This will start a local web server running at: `http://localhost:4567/`
* You can stop the preview server from the command-line using CTRL-C.
* `git add .` `git commit -m "update"` `git push origin dev`

Build & Deploy
--------------

* `middleman build`
* `middleman deploy`


