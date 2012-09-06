require 'bundler'
Bundler.setup
Bundler.require

require 'rack/contrib/try_static'
require 'rack/rewrite'

use Rack::Rewrite do
    #rewrite '(.*)', '$1/'
    #r301 %r{(.+)$}, '$1/'
    #rewrite %r{^/([^.]*)[^/]$}, '/$1/'
    r301 %r{(.*)[^/]$}, '$1/'
end

use Rack::TryStatic,
    :root => "_site",
    :urls => %w[/],
    :try => ['/','.html', 'index.html', '/index.html']

# serve the 404
run Rack::NotFound.new('_site/404.html')