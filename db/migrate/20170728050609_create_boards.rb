class CreateBoards < ActiveRecord::Migration[5.0]
  def change
    create_table :boards do |t|
      t.string   :name, null: false

      t.timestamps
    end
     add_index :boards, :name
  end
end
