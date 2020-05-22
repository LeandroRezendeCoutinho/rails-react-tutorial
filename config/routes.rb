# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :v1, default: { format: 'json' } do
    get 'things', to: 'things#index'
  end
end
