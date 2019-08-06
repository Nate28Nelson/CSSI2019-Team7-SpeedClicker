 #!/usr/bin/python
#
# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import os
import jinja2
import time

#remember, you can get this by searching for jinja2 google app engine
jinja_current_directory = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class SpeedClickerHome(webapp2.RequestHandler):
    def get(self):
        start_template = jinja_current_directory.get_template("templates/index.html")
        self.response.write(start_template.render())
    def post(self):
        pass

class SpeedClickerGame(webapp2.RequestHandler):
    def get(self):
        start_template = jinja_current_directory.get_template("templates/GameIndex.html")
        self.response.write(start_template.render())

    def post(self):
        pass

app = webapp2.WSGIApplication([
<<<<<<< HEAD
    ('/', SpeedClickerHome),
    ('/shooting-range', SpeedClickerGame)
], debug=True);


=======
    ('/', SpeedClicker),
    ('/shooting-range', Game)
>>>>>>> df427ad6292065c36627df7299ec8730afc8d761


<<<<<<< HEAD
#def ScoreBoard(score):
#    text = smallfont.render("score: "+str(score), True, black)
#    gameDisplay.blit(text, [0,0])


def countdown(t):
    while t:
        mins, secs = divmod(t, 60)
        timer = '{:02d}:{:02d}'.format(mins, secs)
        print(timer, end="\r")
        time.sleep(1)
        t -= 1
    print('!!!')

t = input("Enter the time in seconds: ")
countdown(int(t))
=======
class Timer:
  def __init__(self):
    self.start = time.time()

  def restart(self):
    self.start = time.time()

  def get_time_hhmmss(self):
    end = time.time()
    m, s = divmod(end - self.start, 60)
    h, m = divmod(m, 60)
    time_str = "%02d:%02d:%02d" % (h, m, s)
    return time_str
>>>>>>> e63d00bfc051016ee5d99fb7182dc71fc76f32bb
