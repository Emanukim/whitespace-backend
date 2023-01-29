class Lecturer < ApplicationRecord
    validates :name, :email, :institution, presence: true
    has_many :students
    
end
