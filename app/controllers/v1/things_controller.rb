# frozen_string_literal: true

module V1
  class ThingsController < ApplicationController
    def index
      render json: { thing: [
        {
          name: 'some-thing',
          guid: '753f12aa-dfb5-43ee-9792-87227b6bb1fb'
        }
      ] }.to_json
    end
  end
end
