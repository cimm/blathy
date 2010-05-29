class Utility < ActiveRecord::Base

  has_many :readings

  attr_accessible :name, :icon

  validates :name, :presence => true, :uniqueness => true

end
