class Utility < ActiveRecord::Base

  has_many :readings

  attr_accessible :name, :icon

  validates :name, :presence => true, :uniqueness => true

  def up_to_date?
    true if self.readings.last && (self.readings.last.measured_at.month == Time.now.month)
  end

end
