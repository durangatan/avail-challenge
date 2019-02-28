class CreateTenantSecrets < ActiveRecord::Migration[5.2]
  def change
    create_table :tenant_secrets do |t|
      t.string :ssn
      t.string :mmn
      t.integer :tenant_id

      t.timestamps
    end
  end
end
