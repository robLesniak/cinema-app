using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using BaseAPI.Models;


namespace BaseAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddCors();
            services.AddCors(option => 
            {
                option.AddPolicy("AllowOrigin", builder => builder.WithOrigins("http://api.mariuszek.tk:5000/"));
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddDbContext<DataBaseContext>( options =>
                options.UseMySQL(Configuration.GetConnectionString("DefaultConnection")));
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors("AllowOrigin");

            if (env.IsDevelopment())
                app.UseDeveloperExceptionPage();
            else      
                app.UseHsts();

            
            app.UseMvc();
        }
    }
}
