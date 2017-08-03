class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @pin = Pin.find(params[:id])
    @boards = Board.all.order("created_at DESC")
  end

  def edit
  end

end
