class BoardPinsController < ApplicationController

  def new
    # @pin_id = Pin.find(params[:id]).id
    # @board_id = Board.find(params[:id]).id
    # @board_pin = BoardPin.new(board_id: @board_id, pin_id: @pin_id)
  end

  def create
    @pin_id = Pin.find(params[:id]).id
    @board_id = Board.find(params[:id]).id
    @board_pin = BoardPin.new(board_id: @board_id, pin_id: @pin_id)
    # binding.pry

      if @board_pin.save
        redirect_to root_path, notice: "やったぜコンチクショウ！"
      end
  end

  # def destroy
  #   @clip = Clip.find(params[:id])
  #   if @clip.destroy
  #     redirect_to user_path(current_user)
  #   end
  # end

end
