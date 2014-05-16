---
layout: post
title: Jekyll Blogging
published: true
hn: http://news.ycombinator.com/item?id=3431807
external: [latex]
tags:
    - jekyll
    - blog
---

A Jekyll blog might be more complicated than other approaches but it also offers high flexibility and many features.

You can install it yourself with:

    gem install jekyll

#### Note

OSX users might need to update their RubyGems:

    sudo gem update -system

Additionally there are many other options:

  * Using `rdiscount` or `maruku`
  * Using `pygments` for syntax highlighting
  * and this list could go on and on due to an amazing community support

For more information check the [Jekyll Wiki](https://github.com/mojombo/jekyll/wiki)

## Posting

Posting with Jekyll doesn't involve a nice interface but is still a lot more simple than other methods.

You can post with [Markdown] like me or use an alternative. Editing gets even better if you are on a Mac and you use a nice markdown editor like [Mou].

This is how my Jekyll folder tree looks like:

    root/
        _includes/
            disqus.html
            ...
        _layouts/
            default.html
            post.html
        _plugins/
            *.rb
        _posts/
            *.markdown
        _site/
            ...
        css/
            styles.css
            syntax.css
        images/
            twitter.png
            rss.png
            github.png
        javascript/
            ...

This might seem intimidating initially but after you've wrapped your head around it should be easy to understand.

### \_includes

You can place any `.html` files in here and then include them anywhere you want with the following tag:

`{ % include FILE_NAME.html % }`

This is especially helpful if you want to example use [Disqus](http://disqus.com) in your blog. I've included the javascript code in a `disqus.html` file and whenever I want to use it I can simply include it with the above tag.

### \_layouts

The files in here are going to be the basic building blocks of your site. At the top of this post:

    layout: post

therefore i access the `post.html` file in `_layouts`. That `post.html` file is based of a `default.html` file. Therefore I don't have to worry about any CSS or HTML after the site has been set up once.

### \_posts

All your posts go in here. Look at the end of this post to see how I have written this post.

### Automatic Post Generation

**thanks to Cody Krieger**

[Cody Krieger][ck] wrote a small little script:

{% highlight ruby linenos=table %}
#!/usr/bin/env ruby

# *********************************************
# Jekyll Post Generator Awesomeness
# by Cody Krieger (http://codykrieger.com)
# *********************************************

# Usage:
# % ./newpost.rb POST NAME

if ARGV.empty? or ARGV[0].downcase == "--help" or ARGV[0].downcase == "-h"
  puts <<-USAGE

  Usage:
  % ./newpost.rb POST NAME

  USAGE

  exit (ARGV.empty? ? 1 : 0)
end

class String

  # from ruby on rails (https://github.com/rails/rails)
  # activesupport/lib/active_support/inflector/transliterate.rb
  def parameterize(sep = '-')
    # replace accented chars with their ascii equivalents
    parameterized_string = self.dup
    # Turn unwanted chars into the separator
    parameterized_string.gsub!(/[^a-z0-9\-_]+/i, sep)
    unless sep.nil? || sep.empty?
      re_sep = Regexp.escape(sep)
      # No more than one of the separator in a row.
      parameterized_string.gsub!(/#{re_sep}{2,}/, sep)
      # Remove leading/trailing separator.
      parameterized_string.gsub!(/^#{re_sep}|#{re_sep}$/i, '')
    end
    parameterized_string.downcase
  end

end

TEMPLATE = "template.markdown"
POSTS_DIR = "_posts"

# Get the title and use it to derive the new filename
title = ARGV.join(" ")
filename = "#{Time.now.strftime('%Y-%m-%d')}-#{title.parameterize}.markdown"
filepath = File.join(POSTS_DIR, filename)

# Load in the template and set the title
post_text = File.read(TEMPLATE)
post_text.gsub!('%%TITLE%%', title)

# Write out the post
post_file = File.open(filepath, 'w')
post_file.puts post_text
post_file.close

puts "Successfully created file => #{filepath}"
{% endhighlight %}

Execution:

    ./newpost.rb Test Post

*`chmod u+x newpost.rb`* might be needed in order for the script to be executable.

The script is going to look for a file named template.markdown in you Jekyll root directory. This template is a basic Jekyll post that you have to fill in with your content.

    ---
    layout: post
    title: %%TITLE%%
    published: true
    ---
    Hello, Jekyll!

More on this can be found at [Cody's Blog](http://blog.codykrieger.com/2011/02/11/automating-post-creation-with-jekyll.html)

### `\( \LaTeX \)`

And if you are a Physics Lover like me you can easily embed [Maxwell's equations](http://en.wikipedia.org/wiki/Maxwell's_equations) with [LaTeX].

`\[
\begin{aligned}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \\
\nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} & = 0 \end{aligned}
\]`

or you can do some in-line implementations for example here : `\( P(E) = {n \choose k} p^k (1-p)^{ n-k } \)` or if you have a long paragraph in another line `\( 0_{2} - 1_{2} \)` so you can make your posts - whatever they might be about - look really fancy and nice.

Using Latex like this takes a little more than just writing down normal latex code but I am going to cover that in another post. But basically I am just using the [MathJax] library with some configuration changes.

Check out my tutorial on how I did it!

[`\( \LaTeX \)` Math Magic](/posts/latex-math-magic/)

### Post Scriptum

The best thing is that you can just use [Github Pages](http://pages.github.com) to deploy your blog:

    git push origin master

It is as simple as that and you are all set!

Check out the original markdown of this post [here](https://gist.github.com/cwoebker/1314267).

[ck]: http://blog.codykrieger.com/
[MathJax]: http://www.mathjax.org/
[Mou]: http://mouapp.com/
[Markdown]: http://daringfireball.net/projects/markdown/
[LaTeX]: http://www.latex-project.org/
