package com.codewithbharadwaj.backend.repository;

import com.codewithbharadwaj.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
