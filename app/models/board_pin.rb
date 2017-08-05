class BoardPin < ApplicationRecord
  # validates :board_id, uniqueness: {scope: :pin_id}

  belongs_to :pin
  belongs_to :board
end
