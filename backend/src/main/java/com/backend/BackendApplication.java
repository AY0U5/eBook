package com.backend;

import com.backend.bean.Cart;
import com.backend.security.bean.Role;
import com.backend.security.service.facade.RoleService;
import com.backend.service.facade.open.CartOpenService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner runner(RoleService roleService, CartOpenService cartOpenService){
        return args -> {
            Role roleAdmin = roleService.findByName("ROLE_ADMIN");
            if (roleAdmin == null) {
                Role admin = new Role();
                admin.setName("ROLE_ADMIN");
                roleService.save(admin);
            }
            Role roleUser = roleService.findByName("ROLE_USER");
            if (roleUser == null) {
                Role user = new Role();
                user.setName("ROLE_USER");
                roleService.save(user);
            }
            Cart firstCart = cartOpenService.findByRef("cart-0");
            if (firstCart == null) {
                Cart cart = new Cart();
                String ref = "cart-0";
                cart.setRef(ref);
                cartOpenService.save(cart);
            }
        };
    }
}
