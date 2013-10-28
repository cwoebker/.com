require 'bundler'
Bundler.setup
Bundler.require

require 'rack/contrib/try_static'
require 'rack/rewrite'

#use Rack::Rewrite do
#   rewrite '(.*)', '$1/'
#   r301 %r{(.+)$}, '$1/'
#   rewrite %r{^/([^.]*)[^/]$}, '/$1/'
#   r301 %r{(.*)[^/]$}, '$1/'
#   r307 %r{/projects([^.][^/]*)[^/]}, '/projects$1/'
#   r301 '/projects/coco', '/projects/coco/'
#   config.middleware.insert_before(Rack::Lock, Rack::Rewrite) do
#   r301 %r{^/(.*)/$}, '/test/$1'
#end

use Rack::RemoveTrailingSlashes

use Rack::TryStatic,
    :root => "_site",
    :urls => %w[/],
    :try => ['/','.html', 'index.html', '/index.html']

# serve the 404
run Rack::NotFound.new('404.html')
