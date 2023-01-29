class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :bio
      t.string :username
      t.integer :student_id
      t.integer :supervisor_id

      t.timestamps
    end
  end
end
