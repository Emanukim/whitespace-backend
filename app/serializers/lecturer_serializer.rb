class LecturerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :institution, :password_digest
end
