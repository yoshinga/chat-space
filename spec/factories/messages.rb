FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image { Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/fixtures/190329.jpg')) }
    user
    group
  end
end