Haml.init_rails(binding) if defined?(Haml)
Haml::Template.options[:format] = :html5
Sass::Plugin.options[:style] = :compressed