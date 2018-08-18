Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'https://rn-rails-prototype.herokuapp.com/'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
