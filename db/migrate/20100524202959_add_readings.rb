class AddReadings < ActiveRecord::Migration

  def self.up
    create_table :readings do |t|
      t.references  :utility
      t.float       :value
      t.datetime    :measured_at
      t.timestamps
    end
    add_index :readings, :measured_at
  end

  def self.down
    drop_table :readings
  end

end