desc 'Generate tags pages'
task :tags do
  puts "Generating tags..."
  require 'rubygems'
  require 'jekyll'
  include Jekyll::Filters

  options = Jekyll.configuration({})
  site = Jekyll::Site.new(options)
  site.read_posts('')
  site.tags.sort.each do |tag, posts|
    html = ''
    html << <<-HTML
---
layout: tag
title: Tag - "#{tag}"
---
    HTML
    html << '<ul class="posts">'
    posts.each do |post|
      post_data = post.to_liquid
      html << <<-HTML
        <li id=\"tag\"><a href="#{post_data['url']}" >#{post_data['title']}</a></li>
      HTML
    end
    html << <<-HTML
</ul>
<bold><a href="/tags">Back To Tag List</a></bold>
    HTML

    File.open("tag/#{tag}.html", 'w+') do |file|
      file.puts html
    end
  end
  puts 'Done.'
end

desc 'Generate tag-cloud page'
task :cloud do
  puts 'Generating tag cloud...'
  require 'rubygems'
  require 'jekyll'
  include Jekyll::Filters

  options = Jekyll.configuration({})
  site = Jekyll::Site.new(options)
  site.read_posts('')

  html =<<-HTML
---
layout: tag
title: Tag Cloud
external: [tagcanvas]
---

<canvas width="800" height="580" id="tags">
<ul>
    HTML

    site.tags.sort.each do |tag, posts|
      s = posts.count
      html << "<a href=\"/tag/#{tag}\" tag-weight=\"#{s}\" title=\"Tag - #{tag}\">#{tag}</a> "
    end

    html << <<-HTML
      </ul>
    </canvas>
    HTML

    File.open('tags.html', 'w+') do |file|
      file.puts html
    end
  puts 'Done.'
end

