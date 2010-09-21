class AddUtilities < ActiveRecord::Migration

  def self.up
    create_table :utilities do |t|
      t.string      :name
      t.string      :icon
      t.timestamps
    end
    add_index :utilities, :name
  end

  def self.down
    drop_table :utilities
  end

end
