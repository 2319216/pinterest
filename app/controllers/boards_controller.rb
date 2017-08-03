class BoardsController < ApplicationController

  def index
    @boards = Board.all.order("created_at DESC")
    @board = Board.new
  end

  def new
    @board = Board.new
  end

  def create
    @board = Board.new(board_params)
    if @board.save
      redirect_to root_path, notice: 'メメタァ'
    else
      render 'new'
    end
  end

  private

  def board_params
    params.require(:board).permit(:name)
  end

end
