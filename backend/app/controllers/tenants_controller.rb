class TenantsController < ApplicationController
	before_action :set_tenant, only: [:show, :update, :destroy]
	before_action :authenticate_tenant!, only: [:create, :update, :destroy]

	def index
	  @tenants = Tenant.all
	  json_response(@tenants)
	end

	def create
	  @tenant = Tenant.create!(tenant_params)
	  json_response(@tenant, :created)
	end

	def show
	  json_response(@tenant)
	end

	def update
	  @tenant.update(tenant_params)
	  head :no_content
	end

	def destroy
	  @tenant.destroy
	  head :no_content
	end

	private
	def tenant_params
	  params.require(:user_id,:landlord).permit(:dob, :employment_status, :has_pets)
	end

	def set_tenant
	  @tenant = Tenant.find(params[:id])
	end
  end