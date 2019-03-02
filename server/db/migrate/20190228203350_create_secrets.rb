class CreateSecrets < ActiveRecord::Migration[5.2]
  def change
    create_table :secrets do |t|
      t.string :ssn
      t.string :mmn
      t.integer :applicant_id

      t.timestamps
    end
  end
end
