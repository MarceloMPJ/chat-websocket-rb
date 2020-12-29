class RoomsController < ApplicationController

  def index
  end

  def create
    ActionCable.server.broadcast(params[:room], message: params[:message], user: params[:user])
  end

end
