###
# Compass
###

require 'uglifier'
# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Slim
Slim::Engine.set_options format: :html
Slim::Engine.set_default_options pretty: false

# Livereload
configure :development do
  activate :livereload
end

# Autoprefixer
activate :autoprefixer do |config|
  config.browsers = ['last 3 versions', 'Explorer >= 9']
  config.cascade = true
  config.inline = true
end

# es6
activate :es6

# Assets
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript, compressor: Uglifier.new( comments: :none )
  activate :gzip
  activate :minify_html, remove_intertag_spaces: true
  activate :asset_hash
end

# Amazon S3 deploy

