require 'sinatra'
require 'mongo'
require 'ooyala-v2-api'
require 'json/ext' # required for .to_json

include Mongo

configure do
  conn = MongoClient.new("localhost", 27017)
  set :mongo_connection, conn
  set :mongo_db, conn.db('tma')
end

before do
  content_type :json
  headers 'Access-Control-Allow-Origin' => '*'
end

oo = Ooyala::API.new("hwMGs6FG1C6B4yu6unKz6vl2-XAC.GIbnt", "Yt-wRRTA7dTozdEz-1FFqpT3UauPrXNR78eQAvwr")

helpers do
  # a helper method to turn a string ID
  # representation into a BSON::ObjectId
  def object_id val
    BSON::ObjectId.from_string(val)
  end

  def document_by_id id
    id = object_id(id) if String === id
    settings.mongo_db['users'].
      find_one(:_id => id).to_json
  end
end

get '/' do
  'Welcome to TMA-API'.to_json
end

get '/users/?' do
  settings.mongo_db['users'].find.to_a.to_json
end

get '/users/:id/?' do
  document_by_id(params[:id])
end

post '/users/?' do
  new_id = settings.mongo_db['users'].insert params
  document_by_id(new_id)
end

get '/assets/?' do
  params[:where] = "labels INCLUDES 'TMA'"
  oo.get("assets", params)["items"].shuffle.slice(0, 5).to_json
end

get '/assets/featured' do
  params[:where] = "labels INCLUDES 'TMA'"
  oo.get("labels/2a1bd12e5ab841b58c18ca5aba55532f/assets/")["items"].to_json
end
