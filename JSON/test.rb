require 'json'
text = '{"a":"line1","b":"line2","c":"line3","s":[43,"abc",12]}'
rez = JSON.parse text
puts rez.is_a?(Hash);