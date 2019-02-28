class CreateApplicants < ActiveRecord::Migration[5.2]
  def change
    create_table :applicants do |t|
      t.string :email
      t.string :name
      t.integer :dob ,:limit => 8
      t.string :employment_status
      t.string :has_pets
      t.integer :landlord_id
      t.string :token
      t.boolean :submitted
      t.timestamps
    end
  end
end
