package com.srs.dao;

import com.srs.model.Passenger;
import java.util.List;

public interface PassengerDao {
    void create(Passenger passenger);
    List<Passenger> read();
    void update(Passenger passenger);
    void delete(int passengerId);
    Passenger readById(int passengerId);
}
