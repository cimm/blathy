class Utility < ActiveRecord::Base

  has_many :readings

  attr_accessible :name

  validates :name, :presence => true, :uniqueness => true

end
