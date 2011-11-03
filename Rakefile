desc 'Generate tags pages'
task :tags do
  puts "Generating tags..."
  require 'rubygems'
  require 'jekyll'
  include Jekyll::Filters

  options = Jekyll.configuration({})
  site = Jekyll::Site.new(options)
  site.read_posts('')
  site.categories.sort.each do |category, posts|
    html = ''
    html << <<-HTML
---
layout: tag
title: Tag - "#{category}"
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

    File.open("tag/#{category}.html", 'w+') do |file|
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

    site.categories.sort.each do |category, posts|
      s = posts.count
      html << "<a href=\"/tag/#{category}\" tag-weight=\"#{s}\" title=\"Tag - #{category}\">#{category}</a> "
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

