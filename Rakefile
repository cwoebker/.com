desc 'Generate tags page'
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
layout: page
title: Posts tagged: "#{category}"
---
    <h1 id="#{category}">Posts tagged: "#{category}"</h1>
    HTML
    html << '<ul class="posts">'
    posts.each do |post|
      post_data = post.to_liquid
      html << <<-HTML
        <li><a href="#{post_data['url']}" >#{post_data['title']}</a></li>
      HTML
    end
    html << '</ul>'

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
layout: page
title: Tag cloud
---

<h1>Tag Cloud</h1>

    HTML

    site.categories.sort.each do |category, posts|
      html << <<-HTML
      HTML

      s = posts.count
      font_size = 12 + (s*1.5);
      html << "<a href=\"/tag/#{category}\" title=\"Posts tagged: #{category}\" style=\"font-size: #{font_size}px; line-height:#{font_size}px\">#{category}</a> "
    end

    File.open('tags.html', 'w+') do |file|
      file.puts html
    end
  puts 'Done.'
end

