class CreateTenants < ActiveRecord::Migration[5.2]
  def change
    create_table :tenants do |t|
      t.integer :user_id
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
