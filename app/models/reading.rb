class Reading < ActiveRecord::Base

  attr_accessible :value, :utility_id, :measured_at

  validates :value,       :presence => true
  validates :measured_at, :presence => true
  validates :utility_id,  :presence => true

end