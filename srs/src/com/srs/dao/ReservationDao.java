package com.srs.dao;

import com.srs.model.Reservation;
import java.util.List;

public interface ReservationDao {
    void create(Reservation reservation);
    List<Reservation> read();
    void update(Reservation reservation);
    void delete(int reservationId);
    Reservation readById(int reservationId);
}
